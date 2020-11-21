import React, {useState, useEffect} from 'react';
import {LinkContainerTop} from '../components/index';
import {PartsButton} from './UIkit/index';

const LinkContainer = (props) => {
  const [confirmArr, setConfirmArr] = useState('');

  const link = props.link;
  const rows = [
    ({name: '肩',  link: `${link}/shoulder`}),
    ({name: '腕',  link: `${link}/arm`}),
    ({name: '胸',  link: `${link}/chest`}),
    ({name: '背中', link: `${link}/back`}),
    ({name: '脚',  link: `${link}/reg`}),
  ];
  
  const arr = props.arr;
  useEffect(() => {
    setConfirmArr(arr);
  }, [])
  
  const isArr = rows.map((row,index) => (<PartsButton label={row.name} key={String(index)} path={row.link}/>));
  
  const notArr = <PartsButton label={props.buttonLabel} path={props.link}  />

  const box = (confirmArr) ? isArr : notArr;
  
  return(
    <>
      <LinkContainerTop icons={props.icons} label={props.label} />
      <div className={props.flexLine}>
        {box}
      </div>
    </>
  )
}

export default LinkContainer;