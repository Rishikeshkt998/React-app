import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import React, { useEffect } from "react";
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import MainScreen from "../../components/MainScreen";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import './MyNotes.css'

import { useDispatch, useSelector } from "react-redux";
import { deleteNoteAction, listNotes } from "../../actions/notesActions";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import { useNavigate } from "react-router-dom";
const MyNotes = () => {
  const dispatch = useDispatch();

  const noteList = useSelector((state) => state.noteList);
  const { loading, error, notes } = noteList;



  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const noteDelete = useSelector((state) => state.noteDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = noteDelete;

  const noteCreate = useSelector((state) => state.noteCreate);
  const { success: successCreate } = noteCreate;

  const noteUpdate = useSelector((state) => state.noteUpdate);
  const { success: successUpdate } = noteUpdate;
  const navigate=useNavigate()

  useEffect(() => {
    dispatch(listNotes());
    if (!userInfo) {
      navigate("/");
    }
  }, [
    dispatch,
    navigate,
    userInfo,
    successDelete,
    successCreate,
    successUpdate,
  ]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteNoteAction(id));
    }
  };

  return (
    <div style={{width:'100%'}}>
      <Header/>
      <MainScreen title={`Welcome Back ${userInfo && userInfo.name}..`}>
      {console.log(notes)}
      <Link to="/createnote">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          Create new Note
        </Button>
      </Link>
      {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
      {errorDelete && (
        <ErrorMessage variant="danger">{errorDelete}</ErrorMessage>
      )}
      {loading && <Loading />}
      {loadingDelete && <Loading />}
   
<Accordion style={{ width: '100%' }}>
  {notes?.reverse().map((note) => (
    <Accordion.Item key={note._id} eventKey={note._id}>
      <Accordion.Header className="accordion-header">
        <span className="accordion-title">{note.title}</span>
        <div className="accordion-buttons">
          <Button href={`/note/${note._id}`} variant="outline-primary">Edit</Button>
          <Button variant="outline-danger" className="mx-2" onClick={() => deleteHandler(note._id)}>Delete</Button>
        </div>
      </Accordion.Header>
      <Accordion.Body className="accordion-body">
        <h4>
          <Badge variant="success">Category - {note.category}</Badge>
        </h4>
        <ReactMarkdown>{note.content}</ReactMarkdown>
        <footer className="blockquote-footer">
          Created on{" "}
          <cite title="Source Title">
            {note.createdAt.substring(0, 10)}
          </cite>
        </footer>
      </Accordion.Body>
    </Accordion.Item>
  ))}
</Accordion>
    </MainScreen>
    <Footer/>
    </div>
        

  )
}

export default MyNotes