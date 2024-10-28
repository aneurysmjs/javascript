import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import { useState, lazy, LazyExoticComponent, FC, Suspense } from 'react';

const tabs = [
  {
    name: 'Page',
  },
  {
    name: 'Panel',
  },
  {
    name: 'Config',
  },
];

const Loader = () => (
  <div className="text-theme" role="status">
    ...loading
  </div>
);

const componentMap = new Map<number, LazyExoticComponent<FC>>([
  [1, lazy(() => import('./DashboardPanelTab'))],
  [2, lazy(() => import('./DashboardConfigTab'))],
]);

export default function DashboardTabs() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleTabChange = (index: number) => {
    console.log('Changed selected tab to:', index);

    setSelectedIndex(index);
  };

  const DashboardTab = componentMap.get(selectedIndex);

  const [, ...dynamicTabs] = tabs;

  return (
    <div className="flex h-screen w-full justify-center pt-24 px-4">
      <div className="w-full max-w-md">
        <TabGroup selectedIndex={selectedIndex} onChange={handleTabChange}>
          <TabList className="flex gap-4">
            {tabs.map(({ name }) => (
              <Tab
                key={name}
                className="rounded-full py-1 px-3 text-sm/6 font-semibold text-white focus:outline-none data-[selected]:bg-white/10 data-[hover]:bg-white/5 data-[selected]:data-[hover]:bg-white/10 data-[focus]:outline-1 data-[focus]:outline-white"
              >
                {name}
              </Tab>
            ))}
          </TabList>
          <TabPanels className="mt-3">
            <TabPanel>
              <div className="text-theme" aria-label="tab 1 content">
                Content 1
              </div>
            </TabPanel>
            {dynamicTabs.map((tab) => (
              <TabPanel key={tab.name}>
                <Suspense fallback={<Loader />}>{DashboardTab ? <DashboardTab /> : null}</Suspense>
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
}
