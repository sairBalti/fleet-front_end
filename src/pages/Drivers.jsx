import { useEffect, useMemo,useState } from "react";
import axios from "axios";
import Drivertable from "../drivertable/DriverTable";
import Api_Source from "../api_source/Api_Source";
import Form from "../components/Form";
import Header from "../components/Header";
import Modal from "../components/Modal";
import { Controller, useForm } from "react-hook-form";
import DriverForm from "./DriverForm";


function Drivers (){
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const columns = useMemo(() =>[{

    Header : "Driver Info",
    columns: [
        {
            Header: "firstName",
        accessor: "firstName",
      },
      {
           Header: "lastName",
           accessor: "lastName"

      },
      {
        Header: "Address",
        accessor: "Address",
      },
      {
        Header: "Contact_Number",
        accessor: "Contact_Number",
      },
      {
        Header: "cnic",
        accessor: "cnic",
      },
      {
        Header: "Action",
        accessor: "Action",
      },
    ],},],[]);

    useEffect(() => {
      fetchDrivers();
  }, []);


  const fetchDrivers = async () => {
    axios.get('http://localhost:3000/drivers')
    .then(response => {
      setData(response.data); // Store the fetched data in state
      console.log("data",response.data);
    })
    .catch(error => {
      console.error('Error fetching drivers:', error);
    });
  }

  const handleAddDriver = async (newDriver) => {
    console.log('new drivers',newDriver);
    try {
         
      
        //onAddDriver(newDriver);
  
        const data= {...newDriver , Contact_Number: parseInt(newDriver.Contact_Number)}
         const response = await axios.post('http://localhost:3000/drivers',data);
         console.log("respose",response)
        fetchDrivers(); 
      
    } catch (error) {
      console.error('Error creating driver:', error);
    }
  };
  const handleInputChange = (event) => {
    setNewDriver({
      ...newDriver,
      [event.target.name]: event.target.value,
    });
  };
  // const onSubmit = (data) => {
  //   onAddDriver(data); // Notify the parent component with the new driver data
  //   setValue('firstName', ''); 
  //   setValue('lastName', ''); // Clear the input field after submission
  //   setValue('Address', ''); 
  //   setValue('Contact_Number', '');
  //   setValue('cnic', '');
  //   // Add other fields as needed
  // };
 
  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   try {
  //       console.log();
  //       onAddDriver(newDriver);
  //      setNewDriver({ firstName: '', lastName: '', Address: '' , Contact_Number: '', cnic:''});
  //   } catch (error) {
  //     console.error('Error creating driver:', error);
  //   }
  // };
  
const toggleModal = () => {
  setIsModalOpen(!isModalOpen) 
};

return (
  
   <div>
     
    <Header onClick={toggleModal} />
    {
      isModalOpen && <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
      {/* Content inside the modal */}
      <h2>Add Driver</h2>

      <DriverForm onAddDriver={handleAddDriver} />


      
      <button onClick={toggleModal}>Close Modal</button>
    </Modal>
}
        
    
    <div>
    <Drivertable columns={columns} data={data}/>
    </div>
   </div>

)
};

export default Drivers;