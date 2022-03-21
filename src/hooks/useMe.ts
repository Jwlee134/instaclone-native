import { useReactiveVar } from "@apollo/client";
import { useEffect } from "react";
import { isLoggedInVar, logUserOut } from "../apollo";
import { useMeQuery } from "../graphql/generated";

const useMe = () => {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const { data } = useMeQuery({ skip: !isLoggedIn });

  useEffect(() => {
    if (data?.me === null) {
      logUserOut();
    }
  }, [data]);

  return data?.me;
};

export default useMe;
