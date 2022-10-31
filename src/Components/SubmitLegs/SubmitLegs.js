import "./SubmitLegs.scss";
import React,{useState} from "react";
import Button from '../Button';
import {db} from '../../firebase';
import { toast } from 'react-toastify';
import { useLeg } from '../../Context/LegProvider';
import {doc, updateDoc} from 'firebase/firestore';

const SubmitLegs = () => {
  const [loading, setLoading] = useState(false);
  const {legs} = useLeg();

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true);
        console.log(legs);
        try {
          await updateDoc(doc(db, 'legs', 'Legs'), {legs});
          setLoading(false);
          console.log(legs);
          toast.success("Legs Submitted Successfully");
          
        } catch (err) {
          setLoading(err);
          console.log(err);
          toast.success("Some Error Occured");
        }
    }

    return (
        <div className="submitLegs">
            <Button color={"blue"} label={"Submit"} loading={loading} onClick={handleSubmit}/>
        </div>
    );
};

export default SubmitLegs;
