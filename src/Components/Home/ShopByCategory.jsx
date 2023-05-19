import React from 'react'
import { Tab, TabList, Tabs, TabPanel } from 'react-tabs'

function ShopByCategory() {
    return (
        <div>
            <h1 className=' text-center text-5xl font-semibold'>Shop by Category</h1>
            <Tabs>
                <TabList>
                    <div className='grid grid-cols-3'>
                        <Tab>Assault Rifles</Tab>
                        <Tab>Sniper Rifles</Tab>
                        <Tab>SMG</Tab>
                    </div>
                </TabList>

                <TabPanel>
                    <div>aaaaaaaaaaaaaaaaaa</div>
                </TabPanel>
                <TabPanel>
                    <div></div>
                </TabPanel>
                <TabPanel>
                    <div></div>
                </TabPanel>
            </Tabs>
        </div>
    )
}

export default ShopByCategory