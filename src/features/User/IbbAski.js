import { useEffect } from 'react';
import SehirHaritasiAPI from 'http://sehirharitasi.ibb.gov.tr/api/map2.js';
const IbbAski = () => {
  useEffect(() => {
      
    var ibbMAP = new SehirHaritasiAPI({mapFrame:"mapFrame",apiKey:"b52b23d1706c44ea831f2ef542e70c48"}, function(){
        ibbMAP.Map.GetLocation(function (lon, lat) {
            return () => {
                console.info(lon+" "+lat);    
              };
        });
    });
  });
};

export default AddJqueryLibrary;