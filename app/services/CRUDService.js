app.factory('CRUDService', [ '$http', '$rootScope', 
  function ($http, $rootScope ) {

    return {
      add: function(phoneData) {

        var phones = this.getPhonesJSON();

         if( phones ){

          phones[phoneData.id] = phoneData;
          localStorage.setItem("phones", JSON.stringify(phones) );

         }else{

          phones = [];
          phones[phoneData.id] = phoneData;
          localStorage.setItem("phones", JSON.stringify(phones) );

         }
        
      },
      getAll: function(){

        var phones = this.getPhonesJSON();
        var array = [];

        if(phones){

          array = $.map(phones, function(value, index) {
              return [value];
          });
        }

        return array;

      },
      remove:function(phoneId){

        var phones = this.getPhonesJSON();

        delete phones[phoneId];

        localStorage.setItem("phones", JSON.stringify(phones) );

      },
      getPhoneById:function(phoneId){

         var phones = JSON.parse(localStorage.getItem("phones"));
         var phone = null;

         if(phones){

          phone = phones[phoneId]
         }

         return phone;
      },
      getPhonesJSON:function(){

        return  JSON.parse(localStorage.getItem("phones"));
      }
    };
  }
]);