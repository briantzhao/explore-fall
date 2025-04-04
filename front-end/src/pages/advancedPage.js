import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

function AdvancedPage() {
    const [typeInput, setTypeInput] = useState('');
    const navigate = useNavigate();
    const [filters, setFilters] = useState({
        name: '',
        type: [],
        text: '',
        colors: [],
        sets: ''
      });
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFilters((prev) => ({
          ...prev,
          [name]: value,
        }));
      };

      const buildQueryParams = (params) => {
        const query = new URLSearchParams();
      
        Object.entries(params).forEach(([key, value]) => {
            if (Array.isArray(value)) {
                value.forEach((val) => query.append(key,val));
            }
          else if (value !== '' && value !== null && value !== undefined) {
            query.append(key, value);
          }
        });
      
        return query.toString();
      };

      const handleAdvSearch = (e) => {
        e.preventDefault();
        const queryString = buildQueryParams(filters);
        const url = `/results/advQuery/query=${queryString}`;
      
        fetch(url)
          .then((res) => res.json())
          .then((data) => {
            console.log(data); // or setCards(data)
          });
      };
    const handleCheckboxChange = (e) => {
        const {value, checked} = e.target;
        setFilters((prev) => {
            const updatedColors = checked
                ? [...prev.colors, value]
                : prev.colors.filter((colors) => colors !== value);
                return {
                ...prev,
                colors: updatedColors,
                };
        });
    };

    const handleTypeChange = (e) => {
        if (e.key === 'Enter' || e.key === ',') {
            e.preventDefault();
            const newType = typeInput.trimEnd().toLowerCase();
            if (newType && !filters.type.includes(newType)) {
                setFilters((prev) => ({
                    ...prev,
                    type:[...prev.type, newType],
                }));
            }
            setTypeInput('');
        }
    }

    const removeType = (t) => {
        setFilters((prev) => ({
            ...prev,
            type: prev.type.filter((x) => x !== t),
        }));
    };

    const navHome = (e) => {
        navigate(`/`);
      }
          return (
    <div className="AdvancedPage">
        <h1 className="AdvancedTitle" onClick={navHome}>Explore Fall</h1>

      <form className="AdvancedForm" onSubmit={handleAdvSearch}>
            <div className="AdvancedName AdvancedRow">
            <label className="CardName">Card Name</label>
        <input type="text" 
        id="cardName" 
        value={filters.name} 
        onChange={handleChange} 
        placeholder="e.g. Explore"
        />
            </div>
            <div className="AdvancedText AdvancedRow">
            <label className="CardText">Text</label>
        <input type="text" 
        id="cardText" 
        value={filters.text} 
        onChange={handleChange} 
        placeholder="Any text, e.g. &quot;draw a card&quot;"
        />
            </div>
            <div className="AdvancedType AdvancedRow">
            <label className="CardType">Type Line</label>
            <div className="tag-input">
    {filters.type.map((t) => (
      <span key={t} className="tag">
        {t}
        <button type="button" onClick={() => removeType(t)}>×</button>
      </span>
    ))}
    <input
      type="text"
      value={typeInput}
      onChange={(e) => setTypeInput(e.target.value)}
      onKeyDown={handleTypeChange}
      placeholder="Add a type and press Enter"
    />
  </div>
            </div>
            <div className="AdvancedColors AdvancedRow">
            <label className="CardColors">Colors</label>
            <div className="colorsRow">
            {['white','blue','black','red','green','colorless'].map((colors) => (
                <label key={colors}>
                <input
                    type="checkbox"
                    value={colors}
                    checked={filters.colors.includes(colors)}
                    onChange={handleCheckboxChange}
                />
                {colors}
                </label>
            ))}
            </div>
            </div>
            <div className="AdvancedSets AdvancedRow">
            <label className="CardSets">Sets</label>
        <input type="text" 
        id="cardSets" 
        value={filters.sets} 
        onChange={handleChange} 
        placeholder="Enter a set name or choose from the list"
        />
            </div>
        <div className="AdvancedButtonDiv">

        <button className="AdvancedSubmit">
          Search with these options
        </button>
        </div>

        </form>
        
    </div>
    )
}

export default AdvancedPage;
