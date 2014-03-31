/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        
    },

    cameraSuccess: function(imageData){
        document.getElementById('msg').innerHTML = "Camera Success: " + imageData;

        //destinationType: Camera.DestinationType.DATA_URL
        //document.getElementById('image').src = "data:image/jpeg;base64," + imageData;

        //destinationType: Camera.DestinationType.FILE_URI
        document.getElementById('image').src = imageData;
    },

    photo: function() {
        var options = {
            quality: 75,

            //destinationType: Camera.DestinationType.DATA_URL,
            destinationType: Camera.DestinationType.FILE_URI,

            // sourceType: Camera.PictureSourceType.CAMERA,
            sourceType: Camera.PictureSourceType.PHOTOLIBRARY,

            targetWidth: 200,
            targetHeight: 200,
            encodingType: Camera.EncodingType.JPEG,
            saveToPhotoAlbum: true,
            allowEdit: true
        };
        navigator.camera.getPicture( app.cameraSuccess, app.cameraError, options);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        document.getElementById('photo').addEventListener('click', app.photo, false);
    }

};
