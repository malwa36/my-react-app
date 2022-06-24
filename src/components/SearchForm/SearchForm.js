import styles from './SearchForm.modules.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';

const SearchForm = () => {
    return (
        <form className="searchForm">
            <TextInput placeholder="Search..." />
            <Button />
        </form>
    );
  };

  export default SearchForm;