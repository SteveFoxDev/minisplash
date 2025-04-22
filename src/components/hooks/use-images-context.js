import { useContext } from "react";
import ImagesContext from "../../context/images";

function useImagesContext() {
    return useContext(ImagesContext);
}

export default useImagesContext;