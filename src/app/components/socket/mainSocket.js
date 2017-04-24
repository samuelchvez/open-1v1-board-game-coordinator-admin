(function(angular){
  'use strict';

  angular
    .module('othelloLeague')
    .factory('mainSocket', mainSocketFactory);

  mainSocketFactory.$inject = ['socketFactory'];

  function mainSocketFactory(socketFactory){

    var mainIOSocket = io.connect(
      prompt("Insert the fully cualified host and port of the coordinator:"), {
        'sync disconnect on unload': true
      }
    );

    return socketFactory({
      ioSocket: mainIOSocket
    });
  }
})(angular);