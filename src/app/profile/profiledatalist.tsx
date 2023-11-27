'use client'
import React from "react";
import { useState, useEffect } from "react";
interface user {
    userID: number;
    firstName: string;
    lastName: string;
    email: string;
    orgs?: string[]
  }

function Profiledatalist(){
    const [user, setUser] = useState< user | null>(null);

    useEffect(() => {
        // Function to fetch user data from the API
        const fetchUserData = async () => {
          try {
            const response = await fetch('http://localhost:3000/api/getUserInfo');
            if (!response.ok) {
              throw new Error('Failed to fetch user data');
            }
    
            const userData = await response.json();
            setUser(userData.data);
          } catch (error) {
            // console.log('Error fetching user data:', error);
          }
        };
    
        // Call the fetchUserData function when the component mounts
        fetchUserData();
      }, []);

    // console.log("fetch user data ",user)

    return(
        <div className="w-fit flex flex-col gap-2 text-start ">
            <div className="font-bold">USER PROFILE</div>
        {user ? (
          <>
            <p>User ID: {user.userID}</p>
            <p>Name: {user.firstName} {user.lastName}</p>
            <p>Email: {user.email}</p>
            {user.orgs ? (
              <p>Orgs: {user.orgs.join(', ')}</p>
            ) : (
              <p>No orgs available</p>
            )}
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    )
}
export default Profiledatalist