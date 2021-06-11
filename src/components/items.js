import React from 'react';
import { useState, useEffect } from 'react';
import Card from './card';
import Spinner from './spinner';
// import Pagination from './pagination';
import { Pagination } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';


export default function Items() {

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  // required for pagination will be changed from Pagination Component
  const [currentPage, setCurrentPage] = useState(1);
  const [elementsPerPage, setElementsPerPage] = useState(10);
  const [currentElements, setCurrentElements] = useState([]);

  const lastElmtIndex = elementsPerPage * currentPage;
  const fistElmtIndex = lastElmtIndex - elementsPerPage;


  // handle fetching data when mounting Items Component
  useEffect(() => {
    fetchItems();
    setTimeout(() => { setLoading(false); }, 500);
  }, []);

  // handle pagination changed
  useEffect(() => {
    console.log("changed", currentPage);
    setCurrentElements(items.slice(fistElmtIndex, lastElmtIndex));
  }, [currentPage, items]);


  const fetchItems = async () => {
    const data = await fetch('https://fortnite-api.com/v2/cosmetics/br/new');
    const items = await data.json();
    // console.log(items.data.items[50].id);
    setItems(items.data.items);
  }


  return (
    <>
      {
        loading ? <Spinner /> : (
          <>
            <h1>WE HAVE "{items.length}" NEW ITEM :</h1>
            {currentElements.map(item => (<Card item={item} />))}
            <Pagination
              defaultActivePage={1}
              totalPages={Math.ceil(items.length / elementsPerPage)}
              onPageChange={(event, data) => setCurrentPage(data.activePage)}
            />
          </>
        )
      }

    </>
  );
}