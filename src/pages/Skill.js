import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Skill() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
const boxstyle={display:"flex",alignItem:"center",textAlign:"center"}
  return (
    <Box sx={{ width: '100%' }}>
      <Box className="renderinscreen"sx={{  borderColor: 'divider' }} style={boxstyle}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Web" {...a11yProps(0)} />
          <Tab label="Tools" {...a11yProps(1)} />
          
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
    
    <h1 className='tc'>SKILLS</h1>
    <div className='dflex sk flw '>
  <ul className="cl_2">
    <div className="card">
    <div className="card dflex  jb ">
      <div>HTML</div>
      <div className="bluebg">95%</div>
      </div>
      <span className='bar'><span className='html'></span></span>
      <div>
      </div>
    </div>
    <div className="card">
    <div className="card dflex  jb ">
      <div>CSS</div>
      <div className="bluebg">90%</div>
      </div>
      <span className='bar'><span className='css'></span></span>
      <div>
      </div>
    </div>
    <div className="card">
    <div className="card dflex  jb ">
      <div>JavaScript</div>
      <div className="bluebg">85%</div>
      </div>
      <span className='bar'><span className='javascript'></span></span>
      <div>
      </div>
    </div>
    <div className="card">
    <div className="card dflex  jb ">
      <div>Bootstrap</div>
      <div className="bluebg">85%</div>
      </div>
      <span className='bar'><span className='react'></span></span>
      <div>
      </div>
    </div>
    </ul>
    <ul className='cl_2'>
    <div className="card">
    <div className="card dflex  jb ">
      <div>React Js</div>
      <div className="bluebg">85%</div>
      </div>
      <span className='bar'><span className='react'></span></span>
      <div>
      </div>
    </div>
    <div className="card">
    <div className="card dflex  jb ">
      <div>Mongodb</div>
      <div className="bluebg">70%</div>
      </div>
      <span className='bar'><span className='mongodb'></span></span>
      <div>
      </div>
    </div>
    <div className="card">
    <div className="card dflex  jb ">
      <div>Express</div>
      <div className="bluebg">65%</div>
      </div>
      <span className='bar'><span className='express'></span></span>
      <div>
      </div>
    </div>
    <div className="card">
    <div className="card dflex  jb ">
      <div>Node Js</div>
      <div className="bluebg">70%</div>
      </div>
      <span className='bar'><span className='node'></span></span>
      <div>
      </div>
    </div>
    
    
    
  </ul>
 
  </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        
        <h1 className='tc'>Tools</h1>
    <div className='dflex sk flw'>
  <ul className="cl_2">
    <div className="card">
    <div className="card dflex  jb ">
      <div>Vs code</div>
      <div className="bluebg">95%</div>
      </div>
      <span className='bar'><span className='html'></span></span>
      <div>
      </div>
    </div>
    <div className="card">
    <div className="card dflex  jb ">
      <div>GitHub</div>
      <div className="bluebg">80%</div>
      </div>
      <span className='bar'><span className='css'></span></span>
      <div>
      </div>
    </div>
    <div className="card">
    <div className="card dflex  jb ">
      <div>MOngodb Atlas</div>
      <div className="bluebg">85%</div>
      </div>
      <span className='bar'><span className='javascript'></span></span>
      <div>
      </div>
    </div>
    
      
    
    </ul>
    <ul className='cl_2'>
    <div className="card">
    <div className="card dflex  jb ">
      <div>Postman</div>
      <div className="bluebg">85%</div>
      </div>
      <span className='bar'><span className='react'></span></span>
      <div>
      </div>
    </div>
    
  </ul>
 
  </div>
      </TabPanel>
     
    </Box>
  );
}
