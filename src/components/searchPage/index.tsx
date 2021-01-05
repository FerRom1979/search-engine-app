import React from 'react';
import { useForm } from 'react-hook-form';
import { Iinput } from '../../types';
import { useDispatch, useSelector } from 'react-redux';
import { getDataAction, getDataDuck } from '../../redux/actions';
import { Search } from 'react-bootstrap-icons';
import { HandIndexThumb } from 'react-bootstrap-icons';

const SearchPage = () => {
  const dispatch = useDispatch<any>();

  const dataSearch: any = useSelector((store) => store);
  const { register, handleSubmit } = useForm<Iinput>();
  const options = [{ name: 'Google' }, { name: 'DuckGo' }, { name: 'Google and DuckGo' }];

  const onSubmit = (data: any, e: any) => {
    e.target.reset();

    switch (data.seeker) {
      case data.seeker === 'Google':
        return dispatch(getDataAction(data.search));

      case data.seeker === 'DuckGo':
        return dispatch(getDataDuck(data.search));
      default:
        return dispatch(getDataAction(data.search)), dispatch(getDataDuck(data.search));
    }
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="d-flex justify-content-center mt-4">
          <div className="my-4 mx-2">
            <input
              type="text"
              name="search"
              ref={register}
              placeholder="Buscar en la web"
              className="form-control "
            />
          </div>
          <div className="my-4 mx-2">
            <select className=" form-control" name="seeker" placeholder="Seeker" ref={register}>
              {options.map((item: any, index: number) => {
                return (
                  <option className="form-control" key={index}>
                    {item.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="my-4 mx-2">
            <button type="submit" className="btn btn-primary mb-3">
              <Search />
            </button>
          </div>
        </form>
      </div>
      <div className="container">
        {dataSearch.getdata.length !== 0 &&
          dataSearch.getdata.map((item: any, index: number) => {
            return (
              <ul key={index} className="list-unstyled">
                <li>
                  <HandIndexThumb />
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none"
                  >
                    <span>
                      <HandIndexThumb className="text-danger" />
                    </span>
                    {item.title}
                  </a>
                  <p>{item.snippet}</p>
                </li>
              </ul>
            );
          })}
        {dataSearch.getInfo.length !== 0 &&
          dataSearch.getInfo.map((item: any, index: number) => {
            return (
              <ul key={index} className="list-unstyled mx-auto">
                <li className="mx-auto">
                  <a
                    href={item.FirstURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none"
                  >
                    <span className="px-1">
                      <HandIndexThumb className="text-danger " />
                    </span>
                    {item.Text}
                  </a>
                </li>
              </ul>
            );
          })}
      </div>
    </div>
  );
};
export default SearchPage;
