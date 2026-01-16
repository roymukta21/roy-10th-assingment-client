import { useEffect, useState } from "react";
import useAuth from "./useAuth";

const useUserData = () => {
  const { user } = useAuth(); 
  const [mongoUser, setMongoUser] = useState(null);

  useEffect(() => {
    if (user?.email) {
      fetch(`https://study-mate-server-blue.vercel.app/users?email=${user.email}`)
        .then(res => res.json())
        .then(data => setMongoUser(data));
    }
  }, [user?.email]);

  return mongoUser;
};

export default useUserData;
