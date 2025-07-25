import React, { useState } from "react";
import styles from "./Dashboard.module.scss";
import Modal from "../../components/Modal/Modal";
import Button from "../../components/Button/Button";

function Dashboard() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        title="Title"
        footer={
          <>
            <Button size="md" variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
            <Button size="md" style={{ backgroundColor: "#3E5F44", color: "#fff" }}>
              Save
            </Button>
          </>
        }
      >
        <p>
         {[...Array(50)].map((_, index) => <p>Line no {index}</p>)}
        </p>
      </Modal>
      <Button size="lg" onClick={() => setOpen(true)}>Open Modal</Button>
    </div>
  );
}

export default Dashboard;
