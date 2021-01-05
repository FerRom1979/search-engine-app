import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Iinput } from '../../types';
import { useDispatch, useSelector } from 'react-redux';
import { getDataAction, getDataDuck } from '../../redux/actions';

const SearchPage = () => {
  const dispatch = useDispatch<any>();
  const [nameSearch, setNameSearch] = useState<string>('');
  const dataSearch: any = useSelector((store) => store);
  const { register, handleSubmit } = useForm<Iinput>();
  const options = [{ name: 'Google' }, { name: 'DuckGo' }, { name: 'Google and DuckGo' }];

  const onSubmit = (data: any, e: any) => {
    e.target.reset();
    setNameSearch(data.seeker);
    if (data.seeker === 'Google') {
      return dispatch(getDataAction(data.search));
    }
    if (data.seeker === 'DuckGo') {
      return dispatch(getDataDuck(data.search));
    }
    if (data.seeker === 'Google and DuckGo') {
      return dispatch(getDataAction(data.search)), dispatch(getDataDuck(data.search));
    }
  };
  console.log(nameSearch);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" name="search" ref={register} placeholder="Buscar en la web" />
        <select className="form-control" name="seeker" placeholder="Seeker" ref={register}>
          {options.map((item: any, index: number) => {
            return <option key={index}>{item.name}</option>;
          })}
        </select>
        <button type="submit">Buscar</button>
      </form>
      <div>
        {(nameSearch === 'Google and DuckGo' || nameSearch === 'Google') &&
          dataSearch.getdata &&
          dataSearch.getdata.map((item: any, index: number) => {
            return (
              <ul key={index}>
                <li>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.title}
                  </a>
                  <p>{item.snippet}</p>
                </li>
              </ul>
            );
          })}
        {(nameSearch === 'Google and DuckGo' || nameSearch === 'DuckGo') &&
          dataSearch.getInfo &&
          dataSearch.getInfo.map((item: any, index: number) => {
            return (
              <ul key={index}>
                <li>
                  <a href={item.FirstURL} target="_blank" rel="noopener noreferrer">
                    {item.Text}
                  </a>
                  <p>{item.snippet}</p>
                </li>
              </ul>
            );
          })}
      </div>
    </div>
  );
};
export default SearchPage;
