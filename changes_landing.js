
const content_table = document.querySelector(".content_table")

const outpass = document.getElementById("outpass_btn")
const la = document.getElementById("la_btn")
const complaint = document.getElementById("complaint_btn")

const new_btn = document.getElementById("new_btn")
const history_btn = document.getElementById("history_btn")

// var title_innerText = document.querySelector('.title_txt').innerText
var title_innerText;

la.addEventListener("click", () => {
    const title = document.querySelector('.title_head')
    title.innerHTML = "<h2>Leave Application</h2>";
    title_innerText = title.innerText;
});

complaint.addEventListener("click", () => {
    const title = document.querySelector('.title_head')
    title.innerHTML = "<h2>Complaint</h2>";
    title_innerText = title.innerText;
});

outpass.addEventListener("click", () => {
    const title = document.querySelector('.title_head')
    title.innerHTML = "<h2>Outpass</h2>";
    title_innerText = title.innerText;
});

history_btn.addEventListener("click", () => {
    const title = document.querySelector('#title_txt')
    document.getElementById("history_btn").style.backgroundColor = "#6200ee";
    document.getElementById("new_btn").style.backgroundColor = "#56565e";
    // console.log(title.innerText)
    if (title_innerText == "Outpass") {
        content_table.innerHTML = `
      <section class="ftco-section">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="table-wrap">
                                    <table class="table">
                                        <thead class="thead-dark">
                                            <tr>
                                                <th>Sr No.</th>
                                                <th>From</th>
                                                <th>To</th>
                                                <th>Reason</th>
                                                <!-- <th style="text-align: center;">Accept/Reject</th> -->
                                                <!-- <th>A/R</th> -->
                                                <!-- <th>Date</th> -->
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="alert" role="alert">
                                                <th scope="row">1</th>
                                                <td style="padding: 30px 10px;">22 Jun 2022</td>
                                                <td style="padding: 30px 10px;">30 Jun 2022</td>
                                                <td>Family Function</td>
                                                <!-- <td>22 Jun 2022 to 30 Jun 2022</td> -->
                                                <!-- <td>
                                                    <i class="fas fa-check"></i>
                                                    <a href="#" class="close" data-dismiss="alert" aria-label="Close">
                                                        <span aria-hidden="true"><i class="fa fa-close"></i></span>
                                                    </a>
                                                </td> -->
                                            </tr>
                                            <tr class="alert" role="alert">
                                                <th scope="row">2</th>
                                                <td style="padding: 30px 10px;">28 July 2022</td>
                                                <td style="padding: 30px 10px;">1 Aug 2022</td>
                                                <td>For Party</td>
                                                <!-- <td>
                                                    <i class="fas fa-check"></i>
                                                    <a href="#" class="close" data-dismiss="alert" aria-label="Close">
                                                        <span aria-hidden="true"><i class="fa fa-close"></i></span>
                                                    </a>
                                                </td> -->
                                            </tr>
                                            <tr class="alert" role="alert">
                                                <th scope="row">3</th>
                                                <td style="padding: 30px 10px;">10 Jun 2022</td>
                                                <td style="padding: 30px 10px;">30 Jun 2002</td>
                                                <td>For Picnic</td>
                                                <!-- <td>
                                                    <i class="fas fa-check"></i>
                                                    <a href="#" class="close" data-dismiss="alert" aria-label="Close">
                                                        <span aria-hidden="true"><i class="fa fa-close"></i></span>
                                                    </a>
                                                </td> -->
                                            </tr>
                                            <tr class="alert" role="alert">
                                                <th scope="row">4</th>
                                                <td style="padding: 30px 10px;">14 Jun 2022</td>
                                                <td style="padding: 30px 10px;">16 Jun 2022</td>
                                                <td>Medical Reason (Fever)</td>
                                                <!-- // <td>
                                                //     <i class="fas fa-check"></i>
                                                //     <a href="#" class="close" data-dismiss="alert" aria-label="Close">
                                                //         <span aria-hidden="true"><i class="fa fa-close"></i></span>
                                                //     </a>
                                                // </td> -->
                                            </tr>
                                            <tr class="alert" role="alert">
                                                <th scope="row">5 </th>
                                                <td style="padding: 30px 10px;">15 Jun 2022</td>
                                                <td style="padding: 30px 10px;">10 July 2022</td>
                                                <td>Sister Wedding</td>
                                                <!-- <td> 
                                                    <i class="fas fa-check"></i>
                                                    <a href="#" class="close" data-dismiss="alert" aria-label="Close">
                                                        <span aria-hidden="true"><i class="fa fa-close"></i></span>
                                                    </a>
                                                </td> -->
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
    `;
    }


    if (title_innerText == "Leave Application") {
        content_table.innerHTML = `
    <section class="ftco-section">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="table-wrap">
                                    <table class="table">
                                        <thead class="thead-dark">
                                            <tr>
                                                <th>Sr No.</th>
                                                <th>From</th>
                                                <th>To</th>
                                                <th>Reason</th>
                                                <!-- <th style="text-align: center;">Accept/Reject</th> -->
                                                <!-- <th>A/R</th> -->
                                                <!-- <th>Date</th> -->
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="alert" role="alert">
                                                <th scope="row">1</th>
                                                <td style="padding: 30px 10px;">22 Jun 2022</td>
                                                <td style="padding: 30px 10px;">30 Jun 2022</td>
                                                <td>Family Function</td>
                                                <!-- <td>22 Jun 2022 to 30 Jun 2022</td> -->
                                                <!-- <td>
                                                    <i class="fas fa-check"></i>
                                                    <a href="#" class="close" data-dismiss="alert" aria-label="Close">
                                                        <span aria-hidden="true"><i class="fa fa-close"></i></span>
                                                    </a>
                                                </td> -->
                                            </tr>
                                            <tr class="alert" role="alert">
                                                <th scope="row">2</th>
                                                <td style="padding: 30px 10px;">28 July 2022</td>
                                                <td style="padding: 30px 10px;">1 Aug 2022</td>
                                                <td>For Party</td>
                                                <!-- <td>
                                                    <i class="fas fa-check"></i>
                                                    <a href="#" class="close" data-dismiss="alert" aria-label="Close">
                                                        <span aria-hidden="true"><i class="fa fa-close"></i></span>
                                                    </a>
                                                </td> -->
                                            </tr>
                                            <tr class="alert" role="alert">
                                                <th scope="row">3</th>
                                                <td style="padding: 30px 10px;">10 Jun 2022</td>
                                                <td style="padding: 30px 10px;">30 Jun 2002</td>
                                                <td>For Picnic</td>
                                                <!-- <td>
                                                    <i class="fas fa-check"></i>
                                                    <a href="#" class="close" data-dismiss="alert" aria-label="Close">
                                                        <span aria-hidden="true"><i class="fa fa-close"></i></span>
                                                    </a>
                                                </td> -->
                                            </tr>
                                            <tr class="alert" role="alert">
                                                <th scope="row">4</th>
                                                <td style="padding: 30px 10px;">14 Jun 2022</td>
                                                <td style="padding: 30px 10px;">16 Jun 2022</td>
                                                <td>Medical Reason (Fever)</td>
                                                <!-- // <td>
                                                //     <i class="fas fa-check"></i>
                                                //     <a href="#" class="close" data-dismiss="alert" aria-label="Close">
                                                //         <span aria-hidden="true"><i class="fa fa-close"></i></span>
                                                //     </a>
                                                // </td> -->
                                            </tr>
                                            <tr class="alert" role="alert">
                                                <th scope="row">5 </th>
                                                <td style="padding: 30px 10px;">15 Jun 2022</td>
                                                <td style="padding: 30px 10px;">10 July 2022</td>
                                                <td>Sister Wedding</td>
                                                <!-- <td> 
                                                    <i class="fas fa-check"></i>
                                                    <a href="#" class="close" data-dismiss="alert" aria-label="Close">
                                                        <span aria-hidden="true"><i class="fa fa-close"></i></span>
                                                    </a>
                                                </td> -->
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
    `;
    }

    if (title_innerText == "Complaint") {
        content_table.innerHTML = `
    <section class="ftco-section">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="table-wrap">
                                    <table class="table">
                                        <thead class="thead-dark">
                                            <tr>
                                                <th>Sr No.</th>
                                                <th>From</th>
                                                <th>To</th>
                                                <th>Reason</th>
                                                <th style="text-align: center;">Accept/Reject</th>
                                                <!-- <th>A/R</th> -->
                                                <!-- <th>Date</th> -->
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="alert" role="alert">
                                                <th scope="row">1</th>
                                                <td style="padding: 30px 10px;">22 Jun 2022</td>
                                                <td style="padding: 30px 10px;">30 Jun 2022</td>
                                                <td>Family Function</td>
                                                <!-- <td>22 Jun 2022 to 30 Jun 2022</td> -->
                                                <!-- <td>
                                                    <i class="fas fa-check"></i>
                                                    <a href="#" class="close" data-dismiss="alert" aria-label="Close">
                                                        <span aria-hidden="true"><i class="fa fa-close"></i></span>
                                                    </a>
                                                </td> -->
                                            </tr>
                                            <tr class="alert" role="alert">
                                                <th scope="row">2</th>
                                                <td style="padding: 30px 10px;">28 July 2022</td>
                                                <td style="padding: 30px 10px;">1 Aug 2022</td>
                                                <td>For Party</td>
                                                <!-- <td>
                                                    <i class="fas fa-check"></i>
                                                    <a href="#" class="close" data-dismiss="alert" aria-label="Close">
                                                        <span aria-hidden="true"><i class="fa fa-close"></i></span>
                                                    </a>
                                                </td> -->
                                            </tr>
                                            <tr class="alert" role="alert">
                                                <th scope="row">3</th>
                                                <td style="padding: 30px 10px;">10 Jun 2022</td>
                                                <td style="padding: 30px 10px;">30 Jun 2002</td>
                                                <td>For Picnic</td>
                                                <!-- <td>
                                                    <i class="fas fa-check"></i>
                                                    <a href="#" class="close" data-dismiss="alert" aria-label="Close">
                                                        <span aria-hidden="true"><i class="fa fa-close"></i></span>
                                                    </a>
                                                </td> -->
                                            </tr>
                                            <tr class="alert" role="alert">
                                                <th scope="row">4</th>
                                                <td style="padding: 30px 10px;">14 Jun 2022</td>
                                                <td style="padding: 30px 10px;">16 Jun 2022</td>
                                                <td>Medical Leave</td>
                                                <!-- <td>
                                                    <i class="fas fa-check"></i>
                                                    <a href="#" class="close" data-dismiss="alert" aria-label="Close">
                                                        <span aria-hidden="true"><i class="fa fa-close"></i></span>
                                                    </a>
                                                </td> -->
                                            </tr>
                                            <tr class="alert" role="alert">
                                                <th scope="row">5 </th>
                                                <td style="padding: 30px 10px;">15 Jun 2022</td>
                                                <td style="padding: 30px 10px;">10 July 2022</td>
                                                <td>Sister Wedding</td>
                                                <!-- <td> 
                                                    <i class="fas fa-check"></i>
                                                    <a href="#" class="close" data-dismiss="alert" aria-label="Close">
                                                        <span aria-hidden="true"><i class="fa fa-close"></i></span>
                                                    </a>
                                                </td> -->
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
    `;
    }
});

new_btn.addEventListener("click", () => {
    document.getElementById("new_btn").style.backgroundColor = "#6200ee";
    document.getElementById("history_btn").style.backgroundColor = "#56565e";

    if (title_innerText == "Outpass") {
        content_table.innerHTML = `
    <div class="container">
                    <div class=" text-center mt-5 ">

                        <h1>Outpass Form</h1>


                    </div>


                    <div class="row ">
                        <div class="col-lg-7 mx-auto">
                            <div class="card mt-2 mx-auto p-4 bg-light">
                                <div class="card-body bg-light">

                                    <div class="container">
                                        <form id="contact-form" role="form">



                                            <div class="controls">

                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <div class="form-group">
                                                            <label for="form_name">Address *</label>
                                                            <input id="form_name" type="text" name="name"
                                                                class="form-control"
                                                                placeholder="Please enter Add. on Leave *"
                                                                required="required" data-error="Firstname is required.">

                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-group">
                                                            <label for="form_lastname">Mobile Number *</label>
                                                            <input id="form_lastname" type="text" name="surname"
                                                                class="form-control"
                                                                placeholder="Please enter Gaurdian No. *"
                                                                required="required" data-error="Lastname is required.">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <div class="form-group">
                                                            <label for="form_email">From *</label>
                                                            <input id="form_email" type="time" name="email"
                                                                class="form-control"
                                                                placeholder="Please enter your email *"
                                                                required="required"
                                                                data-error="Valid email is required.">

                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-group">
                                                            <label for="form_need">To *</label>
                                                            <!-- <label for="form_email">From *</label> -->
                                                            <input id="form_email" type="time" name="email"
                                                                class="form-control"
                                                                placeholder="Please enter your email *"
                                                                required="required"
                                                                data-error="Valid email is required.">
                                                            <!-- <select id="form_need" name="need" class="form-control"
                                                                required="required"
                                                                data-error="Please specify your need.">
                                                                <option value="" selected disabled>--Select Your Issue--
                                                                </option>
                                                                <option>Request Invoice for order</option>
                                                                <option>Request order status</option>
                                                                <option>Haven't received cashback yet</option>
                                                                <option>Other</option>
                                                            </select> -->

                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <div class="form-group">
                                                            <label for="form_message">Reason *</label>
                                                            <textarea id="form_message" name="message"
                                                                class="form-control"
                                                                placeholder="Write your message here." rows="4"
                                                                required="required"
                                                                data-error="Please, leave us a message."></textarea>
                                                        </div>

                                                    </div>


                                                    <div class="col-md-12">

                                                        <input type="submit" class="btn btn-success btn-send  pt-2 btn-block
                                        " value="Send Request" style="background-color: #6200ee;">

                                                    </div>

                                                </div>


                                            </div>
                                        </form>
                                    </div>
                                </div>


                            </div>
                            <!-- /.8 -->

                        </div>
                        <!-- /.row-->

                    </div>
                </div>
    `;
    }

    if (title_innerText == "Leave Application") {
        content_table.innerHTML = `
    <div class="container">
                    <div class=" text-center mt-5 ">

                        <h1>Leave Application Form</h1>


                    </div>


                    <div class="row ">
                        <div class="col-lg-7 mx-auto">
                            <div class="card mt-2 mx-auto p-4 bg-light">
                                <div class="card-body bg-light">

                                    <div class="container">
                                        <form id="contact-form" role="form">



                                            <div class="controls">

                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <div class="form-group">
                                                            <label for="form_name">Address *</label>
                                                            <input id="form_name" type="text" name="name"
                                                                class="form-control"
                                                                placeholder="Please enter Add. on Leave *"
                                                                required="required" data-error="Firstname is required.">

                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-group">
                                                            <label for="form_lastname">Mobile Number *</label>
                                                            <input id="form_lastname" type="text" name="surname"
                                                                class="form-control"
                                                                placeholder="Please enter Gaurdian No. *"
                                                                required="required" data-error="Lastname is required.">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <div class="form-group">
                                                            <label for="form_email">From *</label>
                                                            <input id="form_email" type="time" name="email"
                                                                class="form-control"
                                                                placeholder="Please enter your email *"
                                                                required="required"
                                                                data-error="Valid email is required.">

                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-group">
                                                            <label for="form_need">To *</label>
                                                            <!-- <label for="form_email">From *</label> -->
                                                            <input id="form_email" type="time" name="email"
                                                                class="form-control"
                                                                placeholder="Please enter your email *"
                                                                required="required"
                                                                data-error="Valid email is required.">
                                                            <!-- <select id="form_need" name="need" class="form-control"
                                                                required="required"
                                                                data-error="Please specify your need.">
                                                                <option value="" selected disabled>--Select Your Issue--
                                                                </option>
                                                                <option>Request Invoice for order</option>
                                                                <option>Request order status</option>
                                                                <option>Haven't received cashback yet</option>
                                                                <option>Other</option>
                                                            </select> -->

                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <div class="form-group">
                                                            <label for="form_message">Reason *</label>
                                                            <textarea id="form_message" name="message"
                                                                class="form-control"
                                                                placeholder="Write your message here." rows="4"
                                                                required="required"
                                                                data-error="Please, leave us a message."></textarea>
                                                        </div>

                                                    </div>


                                                    <div class="col-md-12">

                                                        <input type="submit" class="btn btn-success btn-send  pt-2 btn-block
                                        " value="Send Request" style="background-color: #6200ee;">

                                                    </div>

                                                </div>


                                            </div>
                                        </form>
                                    </div>
                                </div>


                            </div>
                            <!-- /.8 -->

                        </div>
                        <!-- /.row-->

                    </div>
                </div>
    `;
    }

    if (title_innerText == "Complaint") {
        content_table.innerHTML = `
    <div class="container">
                    <div class=" text-center mt-5 ">

                        <h1>Complaint Form</h1>


                    </div>


                    <div class="row ">
                        <div class="col-lg-7 mx-auto">
                            <div class="card mt-2 mx-auto p-4 bg-light">
                                <div class="card-body bg-light">

                                    <div class="container">
                                        <form id="contact-form" role="form">



                                            <div class="controls">

                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <div class="form-group">
                                                            <label for="form_name">Address *</label>
                                                            <input id="form_name" type="text" name="name"
                                                                class="form-control"
                                                                placeholder="Please enter Add. on Leave *"
                                                                required="required" data-error="Firstname is required.">

                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-group">
                                                            <label for="form_lastname">Mobile Number *</label>
                                                            <input id="form_lastname" type="text" name="surname"
                                                                class="form-control"
                                                                placeholder="Please enter Gaurdian No. *"
                                                                required="required" data-error="Lastname is required.">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <div class="form-group">
                                                            <label for="form_email">From *</label>
                                                            <input id="form_email" type="time" name="email"
                                                                class="form-control"
                                                                placeholder="Please enter your email *"
                                                                required="required"
                                                                data-error="Valid email is required.">

                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-group">
                                                            <label for="form_need">To *</label>
                                                            <!-- <label for="form_email">From *</label> -->
                                                            <input id="form_email" type="time" name="email"
                                                                class="form-control"
                                                                placeholder="Please enter your email *"
                                                                required="required"
                                                                data-error="Valid email is required.">
                                                            <!-- <select id="form_need" name="need" class="form-control"
                                                                required="required"
                                                                data-error="Please specify your need.">
                                                                <option value="" selected disabled>--Select Your Issue--
                                                                </option>
                                                                <option>Request Invoice for order</option>
                                                                <option>Request order status</option>
                                                                <option>Haven't received cashback yet</option>
                                                                <option>Other</option>
                                                            </select> -->

                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <div class="form-group">
                                                            <label for="form_message">Reason *</label>
                                                            <textarea id="form_message" name="message"
                                                                class="form-control"
                                                                placeholder="Write your message here." rows="4"
                                                                required="required"
                                                                data-error="Please, leave us a message."></textarea>
                                                        </div>

                                                    </div>


                                                    <div class="col-md-12">

                                                        <input type="submit" class="btn btn-success btn-send  pt-2 btn-block
                                        " value="Send Request" style="background-color: #6200ee;">

                                                    </div>

                                                </div>


                                            </div>
                                        </form>
                                    </div>
                                </div>


                            </div>
                            <!-- /.8 -->

                        </div>
                        <!-- /.row-->

                    </div>
                </div>
    `;
    }
})

