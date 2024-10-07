import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import { ReactElement, useState, lazy, LazyExoticComponent, FC, Suspense } from 'react';

const categories = [
  {
    name: 'Page',
  },
  {
    name: 'Panel',
  },
  {
    name: 'Config',
  },
  // {
  //   name: 'Trending',
  //   posts: [
  //     {
  //       id: 1,
  //       title: 'Ask Me Anything: 10 answers to your questions about coffee',
  //       date: '2d ago',
  //       commentCount: 9,
  //       shareCount: 5,
  //     },
  //     {
  //       id: 2,
  //       title: "The worst advice we've ever heard about coffee",
  //       date: '4d ago',
  //       commentCount: 1,
  //       shareCount: 2,
  //     },
  //   ],
  // },
];

const Loader = () => <div className="text-theme">...loading</div>;

const componentMap = new Map<number, LazyExoticComponent<FC>>([
  [1, lazy(() => import('./DashboardConfigTab'))],
  [2, lazy(() => import('./DashboardPanelTab'))],
]);

export default function DashboardTabs() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleTabChange = (index: number) => {
    console.log('Changed selected tab to:', index);

    setSelectedIndex(index);
  };

  const DashboardTab = componentMap.get(selectedIndex);

  return (
    <div className="flex h-screen w-full justify-center pt-24 px-4">
      <div className="w-full max-w-md">
        <TabGroup selectedIndex={selectedIndex} onChange={handleTabChange}>
          <TabList className="flex gap-4">
            {categories.map(({ name }) => (
              <Tab
                key={name}
                className="rounded-full py-1 px-3 text-sm/6 font-semibold text-white focus:outline-none data-[selected]:bg-white/10 data-[hover]:bg-white/5 data-[selected]:data-[hover]:bg-white/10 data-[focus]:outline-1 data-[focus]:outline-white"
              >
                {name}
              </Tab>
            ))}
          </TabList>
          <TabPanels className="mt-3">
            {/* {categories.map(({ name, posts }) => (
              <TabPanel key={name} className="rounded-xl bg-white/5 p-3">
                <ul>
                  {posts.map((post) => (
                    <li
                      key={post.id}
                      className="relative rounded-md p-3 text-sm/6 transition hover:bg-white/5"
                    >
                      <a href="#" className="font-semibold text-white">
                        <span className="absolute inset-0" />
                        {post.title}
                      </a>
                      <ul className="flex gap-2 text-white/50" aria-hidden="true">
                        <li>{post.date}</li>
                        <li aria-hidden="true">&middot;</li>
                        <li>{post.commentCount} comments</li>
                        <li aria-hidden="true">&middot;</li>
                        <li>{post.shareCount} shares</li>
                      </ul>
                    </li>
                  ))}
                </ul>
              </TabPanel>
            ))} */}

            <TabPanel className="text-theme">Content 1</TabPanel>
            {/* <TabPanel className="text-theme">Content 2</TabPanel>
            <TabPanel className="text-theme">Content 3</TabPanel> */}
            <Suspense fallback={<Loader />}>{DashboardTab ? <DashboardTab /> : null}</Suspense>
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
}
