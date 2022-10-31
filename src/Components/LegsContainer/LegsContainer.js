import "./LegsContainer.scss";
import React, {useState, useEffect} from "react";
import {useLeg} from "../../Context/LegProvider";
import LegDetails from "./LegDetails";
import {db} from '../../firebase';
import Loading from './LegDetails/Loading';
import {collection, query, onSnapshot} from "firebase/firestore";

const LegsContainer = () => {
  const {legs, setLegs} = useLeg();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const q = query(collection(db, 'legs'))
    onSnapshot(q, (querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => {
        return doc.data();
      })
      setLoading(false);
      setLegs(data[0].legs || []);
    })
  },[])

  return (
    <div className="legsContainer">
      {loading?
      <Loading />
      :legs && legs.map((leg, index) => {
        return <LegDetails key={index} leg={leg} index ={index}/>
      })}
    </div>
  );
};

export default LegsContainer;
