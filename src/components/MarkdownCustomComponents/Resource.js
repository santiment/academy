import React from 'react'

const Resource = ({ title, children }) => (
  <div className="flex flex-col bg-athens rounded-lg my-6 py-6 px-8 [&>div]:flex [&>div]:flex-col [&>div_p]:mb-2 [&>div_p]:p-0 last-child:[&>div_p]:m-0">
    {title && <h6 className="text-lg font-semibold text-rhino mb-3">{title}</h6>}
    {children}
  </div>
)

export default Resource
