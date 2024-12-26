![CI logo](https://codeinstitute.s3.amazonaws.com/fullstack/ci_logo_small.png)









To do list :

- change colour of deer head to white
- download 24 pictures for reward system
- make sure the 24 pictures are compressed and scaled 
- come up with 24 quotes for reward system , mention name of user 
- edit javascript to include name of user submitted in form in the quotes in next page
- style the close button in the cards.
- increase font-size of quotes.
- check if you need an about us page.
- choose a clear clear for hover-over on logo ( maybe red )
-  explore possibility and time needed to create  a message pop up in calendar page saying "Hey user" using javascript
- scale all images 
- check for better type size (slack) WebP instead of JPEG or PNG for your images.?
- reduce unused Javascript
- Serve static assets with an efficient cache policy 
- Deer head needs height and width.
- remove unused css
- minimize main thread work for Js.

How to reduce payload size
Aim to keep your total byte size below 1,600 KiB. This target is based on the amount of data that can be theoretically downloaded on a 3G connection while still achieving a Time to Interactive of 10 seconds or less.

Here are some ways to keep payload size down:

Defer requests until they're needed. See the PRPL Pattern for one possible approach.
Optimize requests to be as small as possible. Possible techniques include:
Minify and compress network payloads.
Use WebP instead of JPEG or PNG for your images.
Set the compression level of JPEG images to 85.
Cache requests so that the page doesn't re-download the resources on repeat visits. (See the Network reliability landing page to learn how caching works and how to implement it.

<div class="short" onclick="handelClick(event)">
            <div class="block-content"> 7</div>
        </div>

<script> 
        function handelClick(evt) {
            console.log(evt)
        }
    </script>