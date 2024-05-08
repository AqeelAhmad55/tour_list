import React from 'react'

const Footer = ({list}) => {

  if (!list.length)
    return (
      <div className="flex justify-center">
        <footer className="absolute bottom-5 text-2xl">
          <em>Start adding some items to your packing list 🚀</em>
        </footer>
      </div>
    );

  const numList = list.length;
  const numPacked = list.filter((item) => item.packed).length;
  const perc = Math.round((numPacked / numList) * 100);

  return (
    <div className="flex justify-center">
        <footer className="absolute bottom-5 text-2xl">
          <em>
            {perc === 100
              ? "You got everything! ready to go 🚗"
              : `You have ${numList} items on your list, and you already packed
            ${numPacked} (${perc}%)`}
          </em>
        </footer>
      </div>
  )
}

export default Footer