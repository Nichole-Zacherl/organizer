import { FC, PropsWithChildren, useEffect, useState } from "react";
import { supabase } from "./util/supabase";
import { Provider, User } from "@supabase/supabase-js";
// import { Button } from "@mui/material";

const Auth: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<undefined | User>();
  supabase.auth.onAuthStateChange((_, session) => {
    setUser(session?.user);
  });

  const makeOnClickHandler = (provider: Provider) => {
    return () => {
      supabase.auth.signInWithOAuth({
        provider,
      });
    };
  };

  // TODO: Automatically login via google, once other providers are added remove this
  useEffect(() => {
    (async () => {
      const userResp = await supabase.auth.getUser();
      console.log(userResp.data.user);
      if (!userResp.data.user) {
        makeOnClickHandler("google")();
      }
    })();
  }, []);

  if (!user) {
    return null;
    // TODO: for now we're just going to use google, add more providers later
    // return (
    //   <>
    //     <Button onClick={makeOnClickHandler("google")}>Test</Button>
    //   </>
    // );
  }
  return <>{children}</>;
};

export default Auth;
