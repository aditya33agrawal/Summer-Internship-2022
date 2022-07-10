const blg_title = document.querySelector('#blog-title')
const blg_content = document.querySelector('#blog-content')
const add_blg = document.querySelector('#add-blog')
const bottom = document.querySelector('.bottom')
const blog = document.querySelector('.blog')


const makeBlog = (title, content) => {
	let blog = document.createElement('div')
	blog.classList.add('blog')

	let blog_title = document.createElement('div')
	blog_title.classList.add('blog-title')

	let blog_content = document.createElement('div')
	blog_content.classList.add('blog-content')

	let cross_img = document.createElement('img')
	const cross_attr = {
		"src": "cross.svg",
		"width": "48",
		"height": "48",
		"class": "cross"
	}

	Object.keys(cross_attr).forEach((attribute) => {
		cross_img.setAttribute(attribute, cross_attr[attribute])
	})
	cross_img.addEventListener('click', blogEvent)

	blog_title.innerText = title
	blog_content.innerText = content

	blog.appendChild(cross_img)
	blog.appendChild(blog_title)
	blog.appendChild(blog_content)

	bottom.appendChild(blog)
}