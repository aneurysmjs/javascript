async function main() {
  // Canvas setup
  const canvas = document.createElement('canvas');

  document.body.appendChild(canvas);

  const adapter = await navigator.gpu.requestAdapter();
  const device = await adapter.requestDevice();
  const context = canvas.getContext('webgpu');

  // Configure the canvas context
  context.configure({
    device,
    format: navigator.gpu.getPreferredCanvasFormat(),
    alphaMode: 'opaque',
  });

  /**
   * Define the Rectangle Geometry
   * Create a vertex buffer for the rectangle. A rectangle can be represented with two triangles.
   */

  const vertices = new Float32Array([
    // x, y positions
    -0.5,
    -0.5, // Bottom-left
    0.5,
    -0.5, // Bottom-right
    -0.5,
    0.5, // Top-left
    0.5,
    -0.5, // Bottom-right
    0.5,
    0.5, // Top-right
    -0.5,
    0.5, // Top-left
  ]);

  const vertexBuffer = device.createBuffer({
    size: vertices.byteLength,
    usage: GPUBufferUsage.VERTEX,
    mappedAtCreation: true,
  });

  new Float32Array(vertexBuffer.getMappedRange()).set(vertices);

  vertexBuffer.unmap();

  /**
   * Write the Shaders
   * Write the vertex and fragment shaders.
   */

  const shaderCode = `
    @vertex
    fn vertex_main(@location(0) position : vec2<f32>) -> @builtin(position) vec4<f32> {
        return vec4<f32>(position, 0.0, 1.0);
    }

    @fragment
    fn fragment_main() -> @location(0) vec4<f32> {
        return vec4<f32>(0.0, 1.0, 0.0, 1.0); // Green color
    }
  `;

  const shaderModule = device.createShaderModule({ code: shaderCode });

  /**
   * Create the Pipeline
   * Set up the render pipeline.
   */

  const pipeline = device.createRenderPipeline({
    layout: 'auto',
    vertex: {
      module: shaderModule,
      entryPoint: 'vertex_main',
      buffers: [
        {
          arrayStride: 2 * Float32Array.BYTES_PER_ELEMENT,
          attributes: [
            {
              shaderLocation: 0,
              offset: 0,
              format: 'float32x2',
            },
          ],
        },
      ],
    },
    fragment: {
      module: shaderModule,
      entryPoint: 'fragment_main',
      targets: [
        {
          format: navigator.gpu.getPreferredCanvasFormat(),
        },
      ],
    },
    primitive: {
      topology: 'triangle-list',
    },
  });

  /**
   * Render the Rectangle
   * Render the rectangle using a command encoder.
   */

  const commandEncoder = device.createCommandEncoder();
  const textureView = context.getCurrentTexture().createView();

  const renderPassDescriptor = {
    colorAttachments: [
      {
        view: textureView,
        clearValue: { r: 0.0, g: 0.0, b: 0.0, a: 1.0 },
        loadOp: 'clear',
        storeOp: 'store',
      },
    ],
  };

  const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);

  passEncoder.setPipeline(pipeline);
  passEncoder.setVertexBuffer(0, vertexBuffer);
  passEncoder.draw(6); // 6 vertices for the rectangle
  passEncoder.end();

  device.queue.submit([commandEncoder.finish()]);
}

main();
