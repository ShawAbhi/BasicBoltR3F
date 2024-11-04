import React from 'react';

export function ScrollContent() {
  return (
    <div className="relative w-full">
      <div className="h-[100vh]" />
      <div className="h-[400vh] flex flex-col items-center justify-start p-8">
        {/* <div className="sticky top-[20vh] text-white text-center">
          <h2 className="text-4xl font-bold mb-4">Abhishek Shaw</h2>
          <p className="text-xl opacity-75">Watch the cubes transform as you scroll</p>
        </div> */}
      </div>
    </div>
  );
}

export default ScrollContent;