// import React, { useEffect } from "react";

import { useEffect } from "react";

export function ShareDialog( { isDialogOpen, onClose, eventPath } ) {

  // useEffect( () => {
  //   const url = window.location.href;
  //   navigator.clipboard.writeText( url )
  //     .catch( err => {
  //       console.error( "Failed to copy URL: ", err );
  //     } );
  // }, [] );
  //
  const getUrlToEvent = () => {
    return `${window.location.protocol}//${window.location.host}/${eventPath}`;
  };

  const handleShare = async () => {
    try {
      await navigator.share( {
        title : "Partager l’événement",
        text  : "Voici un événement à partager :",
        url   : getUrlToEvent(),
      } );
    } catch ( err ) {
      console.log( "Error sharing:", err );
    }
  };


  return (
    <>
      {isDialogOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto" onClick={ onClose }>
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:p-0">
            <div className="fixed inset-0 transition-opacity backdrop-blur-sm bg-gray-500 bg-opacity-75" />
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div onClick={ e => e.stopPropagation() } className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <h1 className="text-xl leading-6 font-medium text-gray-900">Partager l&apos;événement 💌</h1>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Voici l&apos;URL a partager:<br />
                    <p className="my-2 text-purple-navy">{getUrlToEvent()}</p>
                    Vous pouvez copier l&apos;url pour ensuite simplement la coller dans un message ou bien sur vos réseaux sociaux 🐣 <br />
                  </p>
                  <div className="bg-gray-50 px-4 sm:px-6 flex justify-center">
                    <button
                      onClick={ handleShare }
                      type="button"
                      className="w-60 hover:bg-purple-navy bg-green-cyan rounded-md border border-gray-300 px-4 py-2 text-base leading-6 font-medium text-white shadow-sm focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                    >
                      Partager maintenant
                    </button>
                  </div>
                  <div className="bg-gray-50 px-3 sm:px-6 flex justify-center">
                    <button onClick={ onClose } type="button"
                      className="w-60 hover:bg-purple-navy bg-upsdell-red rounded-md border border-gray-300 px-4 py-2 text-base leading-6 font-medium text-white shadow-sm focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5">
                      Fermer
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
