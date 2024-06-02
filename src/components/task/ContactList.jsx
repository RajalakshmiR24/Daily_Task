import React from 'react'

export default function ContactList(props) {
  return (
    <div className="border p-4 mb-4 rounded-lg shadow-md">
    <p className="text-lg font-semibold">{props.name}</p>
    <ContactList2 email={props.email} phoneNum={props.phoneNum} />
  </div>  )
}

export function ContactList2(props) {
  return (
    <div className="mt-2">
      <p className="text-sm text-gray-600">Email: {props.email}</p>
      <p className="text-sm text-gray-600">Phone: {props.phoneNum}</p>
    </div>
  );
}