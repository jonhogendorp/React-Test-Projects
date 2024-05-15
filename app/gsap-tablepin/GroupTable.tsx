import React from 'react';
import TableRow from './TableRow';
import TableDataCell from './TableDataCell';    
import { BookmarkIcon } from '@heroicons/react/24/solid';
import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP);

export default function GroupTable() {
const data = 
[
        {
        groupName: 'Group 1',
        groupType: 'Public',
        groupMembers: 10,
        },
        {
        groupName: 'Group 2',
        groupType: 'Private',
        groupMembers: 5,
        },
        {
        groupName: 'Group 3',
        groupType: 'Public',
        groupMembers: 15,
        },
        {
        groupName: 'Group 4',
        groupType: 'Private',
        groupMembers: 7,
        },
];

// const container = useRef();
// const tl = useRef();

// const toggleTimeline = () => {
//   tl.current.reversed(!tl.current.reversed());
// };


// useGSAP(
//         () => {
//                 const boxes = gsap.utils.toArray('.box');
//                 tl.current = gsap
//                   .timeline()
//                   .to(boxes[0], { x: 120, rotation: 360 })
//                   .to(boxes[1], { x: -120, rotation: -360 }, '<')
//                   .to(boxes[2], { y: -166 })
//                   .reverse();
//               },
//             { scope: container }   
// )


  return (
    
        <div className="flex items-center justify-center h-screen">     
         {/* <main>
        <section className="boxes-container" ref={container}>
          <h2>Use the button to toggle a Timeline</h2>
          <div>
            <button onClick={toggleTimeline}>Toggle Timeline</button>
          </div>
          <div className="box gradient-blue">Box 1</div>
          <div className="box gradient-blue">Box 2</div>
          <div className="box gradient-blue">Box 3</div>
        </section>
      </main> */}
        <table>

                <thead>
                <tr>
                <th>Group Name</th>
                <th>Group Type</th>
                <th>Group Members</th>
                </tr>
                </thead>
        
                <tbody>
                {data.map((group, index) => (
                        <TableRow key={index} index={index}>
                        <TableDataCell>
                                <button>
                                        <BookmarkIcon className="h-5 w-5 text-green-500" />
                                </button>
                        </TableDataCell>
                        <TableDataCell>
                                {group.groupName}
                        </TableDataCell>
                        <TableDataCell>
                                {group.groupType}
                        </TableDataCell>
                        <TableDataCell>
                                {group.groupMembers}
                        </TableDataCell>
                </TableRow>
))}
                
        
        
                <tr>
                <td>Group 2</td>
                <td>Private</td>
                <td>5</td>
                </tr>
        
                <tr>
                <td>Group 3</td>
                <td>Public</td>
                <td>15</td>
                </tr>
        
                <tr>
                <td>Group 4</td>
                <td>Private</td>
                <td>7</td>
                </tr>
                </tbody>
        </table>
        </div>
         )}