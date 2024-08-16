import axios from "axios";
import { useEffect, useState } from "react";

const Profile = (Component) => {
  const WrappedComponent = () => {
    const [profileData, setProfileData] = useState({});

    useEffect(() => {
      fetchData();
    }, []);

    const fetchData = async () => {
      try {
        const { data, status } = await axios.get(
          "https://dummyjson.com/users/1"
        );

        if (status === 200) {
          setProfileData(data);
        }
      } catch (err) {
        console.error("Error fetching data", err);
      }
    };

    return <Component data={profileData} />;
  };

  return WrappedComponent;
};

export default Profile;