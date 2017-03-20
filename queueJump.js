function add(d,f,e){var b=d+"="+f;if(!e){var c=new Date();c.setTime(c.getTime()+(31556900000));b+="; expires="+c.toGMTString()}document.cookie=b+";path=/;"}
add("flp", true, true); location.reload()
