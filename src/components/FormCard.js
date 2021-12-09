import React, { useState, useRef } from "react";
import { Form, Button } from "react-bootstrap";
import emailjs from "emailjs-com";

// const useStyles = makeStyles((theme) => ({

// }));

export default function FormCard() {
  // const classes = useStyles();
  const form = useRef();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [onePunchLiner, setOnePunchLiner] = useState("");
  const [story, setStory] = useState("");
  const [designSample, setDesignSample] = useState("");
  // emailjs.init("my_user_id");
  const submit = (e) => {
    e.preventDefault();
    if (!email || !contact || !fullName) {
      alert("Full name or email or contact cannot be blank");
    } else {
      // send email
      console.log("e.target: ", e.target)
      emailjs
        .sendForm(
          "service_etap816",
          "template_g1du8yk",
          e.target, 
          "user_2E4a0YzqAcVcwP6qAhO9C"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );

      // back to default
      setEmail("");
      setContact("");
      setFullName("");
      setOnePunchLiner("");
      setStory("");
      setDesignSample("");
    }
  };
  return (
    <Form ref={form} onSubmit={(e) => submit(e)}>
      <Form.Group className="mb-4" controlId="formBasicName">
        <Form.Label>Full Name</Form.Label>
        <Form.Control
          name = "fullName"
          type="text"
          placeholder="Enter email"
          value={fullName}
          onChange={(e) => {
            setFullName(e.target.value);
          }}
          required
          size="lg"
        />
      </Form.Group>
      <Form.Group className="mb-4" controlId="formBasicEmail">
        <Form.Label size="lg">Email address</Form.Label>
        <Form.Control
          name="email"
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
          size="lg"
        />
        <Form.Control.Feedback type="invalid">
          Please enter valid email.
        </Form.Control.Feedback>
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>

      <Form.Group className="mb-4" controlId="formBasicContact">
        <Form.Label size="lg">Contact Number</Form.Label>
        <Form.Control
          name="contact"
          type="text"
          placeholder="Enter contact number"
          value={contact}
          onChange={(e) => {
            setContact(e.target.value);
          }}
          required
          size="lg"
        />
      </Form.Group>
      <Form.Group className="mb-4" controlId="formBasicOnePunchLiner">
        <Form.Label>One Punch Line</Form.Label>
        <Form.Control
          name="onePunchLiner"
          type="text"
          placeholder="Enter your awesome funny one punch liner"
          value={onePunchLiner}
          onChange={(e) => {
            setOnePunchLiner(e.target.value);
          }}
          required
          size="lg"
        />
      </Form.Group>
      <Form.Group className="mb-4" controlId="formBasicStrotyTextArea">
        <Form.Label>Story behind your one punch liner</Form.Label>
        <Form.Control
          name="story"
          as="textarea"
          rows={3}
          placeholder="Enter the story behind your great one punch liner"
          value={story}
          onChange={(e) => {
            setStory(e.target.value);
          }}
          size="lg"
        />
      </Form.Group>
      <Form.Group controlId="formBasicStory" className="mb-4">
        <Form.Label>Design sample</Form.Label>
        <Form.Control
          name="designSample"
          type="file"
          placeholder="Upload Design Sample"
          value={designSample}
          onChange={(e) => {
            setDesignSample(e.target.value);
          }}
          size="lg"
        />
      </Form.Group>
      <Button type="submit" className="btn btn-sm btn-success">
        Interested !!
      </Button>
    </Form>
  );
}
