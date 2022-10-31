import "./SubmitLegs.scss";
import React,{useState} from "react";
import Button from '../Button';
import {db} from '../../firebase';
import { toast } from 'react-toastify';
import { useLeg } from '../../Context/LegProvider';
import {collection, addDoc} from 'firebase/firestore';

const SubmitLegs = () => {
  const [loading, setLoading] = useState(false);
  const {legs} = useLeg();

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true);
        console.log(legs);
        try {
          await addDoc(collection(db, 'legs'), {legs});
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
