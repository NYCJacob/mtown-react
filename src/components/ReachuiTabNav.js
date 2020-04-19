import {Tabs, TabList, Tab, TabPanels, TabPanel} from "@reach/tabs";
import "@reach/tabs/styles.css";


    function DataTabs( tabConfig ) {

        return (
            <Tabs>
                <TabList>
                    {data.map((tab, index) => (<Tab key={index}>{tab.label}</Tab>))}
                </TabList>
                <TabPanels>          {
                    data.map((tab, index) => (
                        <TabPanel key={index}>{tab.content}</TabPanel>))
                }}
                </TabPanels>
            </Tabs>);
    }