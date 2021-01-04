import React from 'react';
import { useForm } from 'react-hook-form';
import { Iinput } from '../../types';
import { useDispatch, useSelector } from 'react-redux';
import { getDataAction } from '../../redux/actions';

const SearchPage = () => {
  const dispatch = useDispatch();
  // eslint-disable-next-line no-undef
  console.log(process.env.REACT_APP_NOT_SECRET_CODE_CX);

  const dataSearch: any = useSelector((store) => store);
  const { register, handleSubmit } = useForm<Iinput>();

  const onSubmit = (data: any, e: any) => {
    e.target.reset();

    dispatch(getDataAction(data.search));
  };

  /* console.log(datos.getdata[0].pagemap.cse_thumbnail[0].src); */

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" name="search" ref={register} placeholder="Buscar en la web" />
        <button type="submit">Buscar</button>
      </form>
      <div>
        {dataSearch.getdata &&
          dataSearch.getdata.map((item: any, index: number) => {
            return (
              <ul key={index}>
                <li>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.title}
                  </a>
                  <p>{item.snippet}</p>
                  {/* {item.getdata.pagemap[0].cse_thumbnail[0].src && (
                    <img src={item.getdata[0].pagemap.cse_thumbnail[0].src} alt="foto" />
                  )} */}
                </li>
              </ul>
            );
          })}
        {/* <script async src="https://cse.google.com/cse.js?cx=ec47603a96be4e460"></script>
        <div className="gcse-search"></div> */}
      </div>
    </div>
  );
};
export default SearchPage;
