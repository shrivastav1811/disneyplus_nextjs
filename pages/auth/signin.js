import React from "react";
import { getProviders, signIn } from "next-auth/react";

const signin = ({ providers }) => {
  return (
    <div className='flex flex-col justify-center text-center  items-center min-h-screen py-2  px-14'>
    <img src="/images/disnep.png" className='w-100 h-60'   />
    <p className='font-xl font-medium text-xl italic first-letter: text-white -mt-15'>Welcome to DisneyPlus+ World , Enjoy The Build</p>
    <div className="mt-20 ">

    
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button   
            className="bg-transparent hover:bg-blue-500 text-white-700 font-semibold hover:text-white py-4 px-6 border border-gray-500 hover:border-transparent rounded"
            onClick={() => signIn(provider.id, {callbackUrl : `${window.location.origin}`})}
          >
            Sign in with {provider.name}
          </button>{" "}
        </div>
      ))}
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}

export default signin;
