import styles from './List.modules.scss';

const List = () => {
    return (
      <div className="list">
        <header className="header title">Things to do<span>soon</span></header>
        <p className="description">Interesting things I want to check out</p>
		<section className="columns">
          <Column title="Books" />
          <Column title="Movies" />
          <Column title="Games" />
		</section>
      </div>
    );
  };

  export default List;