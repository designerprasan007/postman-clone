import { useState } from 'react'
import { Box, Flex, Stack } from '@chakra-ui/react'
import {IconButton, Button} from '@chakra-ui/button'
import {FaFolderOpen, FaCloudsmith, FaHistory, FaUserAlt} from 'react-icons/fa'
import ApiView from './components/ApiView/ApiView';
import FolderView from './components/FolderView/FolderView';
import HistoryView from './components/HistoryView/HistoryView';


const LeftSide = ({currentCall, currentActiveTab, LIST}) => {
  const [currentView, setCuurentView] = useState("FolderView");

  const handleView = (e) =>{
    setCuurentView(e)
  }
  
  return (
    <Flex pos="sticky" flexDir="column" justifyContent="space-between" textAlign="start" pt="10" bg="orange.500" color="white" h="90vh" borderEnd="1px">
        <div className='col-12'>
        <div className='row'>
          <div className='col-6'>
            <Box pl="5">
              <IconButton icon={<FaUserAlt />} variant="unstyled" />My work place
            </Box>
            <Flex flexDir="column" as="nav"  borderEnd="1px" borderColor="gray">
              <Box alignItems="center" p={4}>
                <Button leftIcon={<FaFolderOpen />} colorScheme={currentView === 'FolderView' ? 'blue' : 'white'} variant={currentView === 'FolderView' ? 'outline' : 'ghost'} onClick={() => handleView("FolderView")}>Collection</Button>
              </Box>
              <Box alignItems="center" p={4}>
                <Button leftIcon={<FaCloudsmith />} colorScheme={currentView === 'ApiView' ? 'blue' : 'white'} variant={currentView === 'ApiView' ? 'outline' : 'ghost'} onClick={() => handleView("ApiView")}>API's</Button>
              </Box>
              {/* <Box alignItems="center" p={4}>
                <Button leftIcon={<FaBoxOpen />} colorScheme='blue' variant='ghost'>Environment</Button>
              </Box>
              <Box alignItems="center" p={4}>
                <Button leftIcon={<FaServer />} colorScheme='blue' variant='ghost'>Server</Button>
              </Box> */}
              <Box alignItems="center" p={4}>
                <Button leftIcon={<FaHistory />} colorScheme={currentView === 'HistoryView' ? 'blue' : 'white'} variant={currentView === 'HistoryView' ? 'outline' : 'ghost'}  onClick={() => handleView("HistoryView")}>History</Button>
              </Box>
            </Flex>
          </div>
          <div className='col-6'>
            <Stack spacing={4} direction='row' left="100">
              <Button colorScheme='white' variant='outline' size='xs'>
                New
              </Button>
              {/* <Button colorScheme='white' variant='outline' size='xs'>
                Import
              </Button> */}
            </Stack>
            <Flex flexDir="column" as="nav" pt="10"  >
              {currentView === 'FolderView' &&  <div>
                {LIST.map((item, index) => {
                  return <FolderView {...item} key={`collapse-${index}`} currentActiveTab={currentActiveTab} currentCall={currentCall} />;
                })}
              </div> }
              {currentView === 'ApiView' && <div>
              {LIST.map((item, index) => {
                  return <ApiView {...item} key={`collapse-${index}`} currentActiveTab={currentActiveTab} currentCall={currentCall} />;
                })}
                </div>}
              {currentView === 'HistoryView' && <HistoryView /> }
                
            </Flex>
          </div>
        </div> 
        
        </div>
    </Flex >
  )
}

export default LeftSide