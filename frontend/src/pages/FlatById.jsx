import { useParams } from "react-router";
import {  useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchFlatById } from "../redux/operations";

export default function FlatById() {
   const id = useParams().id;
   const dispatch= useDispatch();
     useEffect(() => {
       dispatch(fetchFlatById(id));
     }, [dispatch]);

  return (<h1>{id}</h1>)
}
