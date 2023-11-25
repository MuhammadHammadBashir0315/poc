'use client'

import React from 'react'
import Test from '../components/Test'
import { useState, useEffect } from 'react';

import { getProjectTests } from '@/utils/features'
import { useSelector } from 'react-redux';

 function page() {
  
  const [fetchData, setFetchData] = useState(null);
  const [fetchProjects , setFetchProjects] = useState()
  const [dataAfterPost, setDataAfterPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const ProjectID = useSelector((state:any) => state.Selectedproject);
        console.log("selected project id is :" , ProjectID)
  useEffect(() => {
    // Fetch data and perform POST request on component mount
    const fetchDataAndPost = async () => {
      try {
        // GET request
        // const response = await fetch('http://localhost:3000/api/getUserInfo');
        // const data = await response.json();
        // const orgsData = data.data.orgs
        // setFetchData(orgsData.Projects);

        
        
        

        // POST request using the fetched data
        const postResponse = await fetch('http://localhost:3000/api/getTests', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ProjectID: ProjectID }),
        });

        const postData = await postResponse.json();
        console.log('Post request result in Tests:', postData);
        setDataAfterPost(postData.data);
        // setFetchProjects(postData)
      } catch (error) {
        console.error('Error fetching or posting data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDataAndPost();

    // Cleanup function (optional)
   
  }, [ ProjectID]);
  // console.log("In tests",dataAfterPost)
  // console.log("data in first call of tests :" ,fetchData )
  // console.log("Tests comming from api :" ,dataAfterPost )
  return (
    <div className='w-full my-4 mx-16 flex flex-col gap-4'>
        <div className='font-bold text-lg'>Test Heading</div>
      <div className='mx-auto flex justify-center w-full '>
     
     
         {isLoading ? (
              
              <div>Loading...</div>
            ) : (
              <Test t={dataAfterPost} />
            )}
      </div>
    </div>
  )
}

export default page
