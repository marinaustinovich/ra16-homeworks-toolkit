import { ChangeEvent, useCallback, useState } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
import { useAppDispatch } from "../../hooks";
import { addFetchedMovies, setFilter } from "../../store/movies/slice";

export const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useAppDispatch();

  const handleSubmit = useCallback((event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(addFetchedMovies(null))
    dispatch(setFilter(searchTerm));
  }, [dispatch, searchTerm]);

  return (
    <Form onSubmit={handleSubmit} className="py-3">
      <InputGroup>
        <Form.Control
          type="text"
          placeholder="Search for movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button variant="outline-secondary" type="submit">
          Search
        </Button>
      </InputGroup>
    </Form>
  );
};
