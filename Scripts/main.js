var pathServer = window.location.protocol + "//" + window.location.host + "/" + window.location.pathname.split("/")[1];
var check_Email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var count_progess = 1;
var interVal;

function resJsonToDate(strJson) {
    if (strJson == '' || strJson == null) {
        return strJson;
    } else {
        var dateString = strJson.substr(6);
        var currentTime = new Date(parseInt(dateString));
        var month = currentTime.toLocaleString('en-US', { month: 'short' });
        var day = ("0" + currentTime.getDate()).slice(-2);
        var year = currentTime.getFullYear();
        var date = day + "-" + month + "-" + year;
        return date;
    }
    
};

function resJsonToDateTime(strJson) {
    if (strJson == '' || strJson == null) {
        return strJson;
    } else {
        var d = new Date(parseInt(strJson.substr(6)));
        var date = [("0" + d.getDate()).slice(-2),
            d.toLocaleString('en-US', { month: 'short' }),
            d.getFullYear()].join('-') + ' ' +
            [("0" + d.getHours()).slice(-2),
            ("0" + d.getMinutes()).slice(-2),
            ("0" + d.getSeconds()).slice(-2)].join(':');
        return date;
    }

};


function cCheckbox(val) {
    var cYN = '';
    if (val == 'on') {
        cYN = 'Y';
        return cYN;
    } else {
        cYN = 'N';
        return cYN;;
    }
};

function progess(toltal_data, DataPerHalfSec) {
    console.log(DataPerHalfSec)
    if ((DataPerHalfSec / toltal_data) * 100 * count_progess < 98) {
        $('#progress').css('width', (DataPerHalfSec / toltal_data) * 100 * count_progess + "%");
        count_progess = count_progess + 1;
    }
}

function xhr_loading(xhr) {
    xhr.upload.addEventListener("progress", function (evt) {
        if (evt.lengthComputable) {
            var percentComplete = evt.loaded / evt.total;
            let timerInterval;
            return new swal({
                html: '<div><i class="bi bi-database-add" style="font-size: 5.73em;"></i></div><div><h4>Save in progress...</h4></div><div class="m-section__content"><div class="progress" style="height: 9px;"><div id="progress" class="progress-bar progress-bar-striped progress-bar-animated  bg-success" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div></div></div>',
                timer: 2000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading();
                    const timer = Swal.getPopup().querySelector("b");
                    timerInterval = setInterval(() => {
                        //timer.textContent = `${Swal.getTimerLeft()}`;
                    }, 100);
                },
                willClose: () => {
                    clearInterval(timerInterval);
                }
            })
            //interVal = setInterval(function () { progess(evt.loaded, 1400); }, 250);
        }
    }, false);

    // Download progress
    xhr.addEventListener("progress", function (evt) {

        if (evt.lengthComputable) {
            var percentComplete = evt.loaded / evt.total;
            // Do something with download progress
        }
    }, false);
}

function xhr_loading_Upload(xhr) {
    xhr.upload.addEventListener("progress", function (evt) {
        if (evt.lengthComputable) {
            var percentComplete = evt.loaded / evt.total;
            return new swal({
                html: '<div class="save_loading"><svg viewBox="0 0 140 140" width="140" height="140"><g class="outline"><path d="m 70 28 a 1 1 0 0 0 0 84 a 1 1 0 0 0 0 -84" stroke="rgba(0,0,0,0.1)" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"></path></g><g class="circle"><path d="m 70 28 a 1 1 0 0 0 0 84 a 1 1 0 0 0 0 -84" stroke="#71BBFF" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-dashoffset="200" stroke-dasharray="300"></path></g></svg></div><div><h4>Uploading...</h4></div><div class="m-section__content"><div class="progress" style="height: 9px;"><div id="progress" class="progress-bar progress-bar-striped progress-bar-animated  bg-success" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div></div></div>',
                showConfirmButton: !1,
                allowOutsideClick: false,
                backdrop: false,
            })
            interVal = setInterval(function () { progess(evt.loaded, 600); }, 250);
        }
    }, false);

    // Download progress
    xhr.addEventListener("progress", function (evt) {

        if (evt.lengthComputable) {
            var percentComplete = evt.loaded / evt.total;
            // Do something with download progress
        }
    }, false);
}

function xhr_loading_Upload_Saving(xhr) {
    xhr.upload.addEventListener("progress", function (evt) {
        if (evt.lengthComputable) {
            var percentComplete = evt.loaded / evt.total;
            return new swal({
                html: '<div class="save_loading"><svg viewBox="0 0 140 140" width="140" height="140"><g class="outline"><path d="m 70 28 a 1 1 0 0 0 0 84 a 1 1 0 0 0 0 -84" stroke="rgba(0,0,0,0.1)" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"></path></g><g class="circle"><path d="m 70 28 a 1 1 0 0 0 0 84 a 1 1 0 0 0 0 -84" stroke="#71BBFF" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-dashoffset="200" stroke-dasharray="300"></path></g></svg></div><div><h4>Uploading...</h4></div><div class="m-section__content"><div class="progress" style="height: 9px;"><div id="progress" class="progress-bar progress-bar-striped progress-bar-animated  bg-success" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div></div></div>',
                showConfirmButton: !1,
                allowOutsideClick: false,
                backdrop: false,
            })
            interVal = setInterval(function () { progess(evt.loaded, 10); }, 250);
        }
    }, false);

    // Download progress
    xhr.addEventListener("progress", function (evt) {

        if (evt.lengthComputable) {
            var percentComplete = evt.loaded / evt.total;
            // Do something with download progress
        }
    }, false);
}

function xhr_load_table(xhr) {
    xhr.upload.addEventListener("progress", function (evt) {
        if (evt.lengthComputable) {
            var percentComplete = evt.loaded / evt.total;
            return new swal({
                html: '<div class="save_loading"><svg viewBox="0 0 140 140" width="140" height="140"><g class="outline"><path d="m 70 28 a 1 1 0 0 0 0 84 a 1 1 0 0 0 0 -84" stroke="rgba(0,0,0,0.1)" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"></path></g><g class="circle"><path d="m 70 28 a 1 1 0 0 0 0 84 a 1 1 0 0 0 0 -84" stroke="#71BBFF" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-dashoffset="200" stroke-dasharray="300"></path></g></svg></div><div><h4>Loading...</h4></div></div>',
                showConfirmButton: !1,
                allowOutsideClick: false,
                backdrop: false,
            })
        }
    }, false);

    // Download progress
    xhr.addEventListener("progress", function (evt) {

        if (evt.lengthComputable) {
            var percentComplete = evt.loaded / evt.total;
            // Do something with download progress
        }
    }, false);
}

function round(value, decimals) {
    return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
}