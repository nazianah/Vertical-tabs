import React from "react";
import { Tabs, Tab, TabPanel, TabList } from "react-web-tabs";

class NewNavigation extends React.Component {
  render() {
    return (
      <Tabs defaultTab="vertical-tab-one" vertical>
        <TabList>
          <Tab tabFor="vertical-tab-one">NEW YORK</Tab>
          <Tab tabFor="vertical-tab-two">Tab 2</Tab>
          <Tab tabFor="vertical-tab-three">ENGLAND</Tab>
        </TabList>

        <TabPanel tabId="vertical-tab-one">
          <p>NEW YORK </p>
        </TabPanel>

        <TabPanel tabId="vertical-tab-two">
          <p>Tab content</p>
        </TabPanel>

        <TabPanel tabId="vertical-tab-three">
          <p>ENGLAND</p>
        </TabPanel>
      </Tabs>
    );
  }
}

export default NewNavigation;
