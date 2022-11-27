import { useState } from "react";
import { Container, Button } from "@mui/material";
import { WORDLIST } from "./mnemonic";

const leng = 12;

const App = () => {
  const [key, setKey] = useState("");
  const getRandom = (): number => {
    return Number((Math.random() * 2047).toFixed(0));
  };

  const getWords = () => {
    const target: string[] = [];
    for (let i = 0; i < leng; i++) {
      const txt = WORDLIST[getRandom()];
      if (!target.includes(txt)) target.push(txt);
      else i--;
    }
    return target;
  };

  const copyTxt = () => {
    let txt = "";
    getWords().forEach((w) => {
      txt += `${w} `;
    });
    window.navigator.clipboard.writeText(txt);
    console.log(txt);

    setKey(txt);
  };

  const reCopy = () => {
    window.navigator.clipboard.writeText(key);
  };

  // useEffect(() => {
  //   window.addEventListener("focus", () => {
  //     copyTxt();
  //   });
  // }, []);

  return (
    <Container sx={{ width: "100vw", height: "100vh" }}>
      <h1>Mnemonic Generator</h1>
      <Button
        variant="contained"
        sx={{ height: "45px", marginRight: "1rem" }}
        onClick={copyTxt}
      >
        Generate!
      </Button>
      <Button variant="contained" sx={{ height: "45px" }} onClick={reCopy}>
        ReCopy!
      </Button>
    </Container>
  );
};

export default App;
