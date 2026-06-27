<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Next Hire</title>
    <style>
        body{
            font-family: Arial;
            margin:0;
            background:#f4f6f9;
            text-align:center;
        }
        header{
            background:#1f3b73;
            color:white;
            padding:30px;
        }
        h1{margin:0;}
        .tagline{color:#ddd;}

        .container{
            margin-top:50px;
        }

        .card{
            background:white;
            width:80%;
            margin:auto;
            padding:20px;
            border-radius:10px;
            box-shadow:0px 0px 10px #ccc;
        }

        input, select, textarea{
            width:90%;
            padding:10px;
            margin:10px 0;
        }

        button{
            padding:10px 20px;
            background:#1f3b73;
            color:white;
            border:none;
            cursor:pointer;
        }
    </style>
</head>

<body>

<header>
    <h1>Next Hire</h1>
    <p class="tagline">Connecting Talent with Opportunity</p>
</header>

<div class="container">
    <div class="card">
        <h2>Candidate Application Form</h2>

        <form>
            <input type="text" placeholder="Full Name" required><br>
            <input type="text" placeholder="Mobile Number" required><br>
            <input type="email" placeholder="Email ID"><br>

            <select required>
                <option value="">Qualification</option>
                <option>12th Pass</option>
                <option>Graduate</option>
                <option>Post Graduate</option>
            </select>

            <select required>
                <option value="">English Level</option>
                <option>Basic</option>
                <option>Intermediate</option>
                <option>Good</option>
                <option>Fluent</option>
            </select>

            <textarea placeholder="Why do you want this job?"></textarea>

            <button type="submit">Submit Application</button>
        </form>
    </div>
</div>

</body>
</html>
.card {
    text-align: left;
}
