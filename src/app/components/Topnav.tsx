import React, { useState, useEffect } from 'react';
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import AccountForm from './AnotherForm';

function Topnav(props: any) {
  const [fetchData, setFetchData] = useState(null);
  const [fetchProjects, setFetchProjects] = useState()
  const [dataAfterPost, setDataAfterPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch data and perform POST request on component mount
    const fetchDataAndPost = async () => {
      try {
        // GET request
        const response = await fetch('http://localhost:3000/api/getUserInfo');
        const data = await response.json();
        setFetchData(data?.data?.orgs);



        // POST request using the fetched data
        const postResponse = await fetch('http://localhost:3000/api/getOrg', {
          mode: 'no-cors',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ OrgIDs: data?.data?.orgs }),
        });

        const postData = await postResponse.json();
        // console.log('Post request result:', postData);
        setDataAfterPost(postData);
        setFetchProjects(postData.data)
      } catch (error) {
        console.error('Error fetching or posting data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDataAndPost();

    // Cleanup function (optional)

  }, []);


  // console.log("In top navbar", fetchData)
  // console.log("data of fetch projects", fetchProjects)
  console.log("data after post inside TOP NAV" , dataAfterPost)

  return (
    <div className="">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            {isLoading ? (

              <div>Loading...</div>
            ) : (
              <AccountForm data={dataAfterPost} placeholder='organization' />
            )}
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}



export default Topnav;
