import MarkdownIt from 'markdown-it'
import MarkdownItMathJaX3 from '../index.js'

const md = `
# Homomorphism

# Definition
A homomorphism is a map between tow algebraic structures of the same type (that is of the same name), that preserves the operations of the structures. This means a map $f:A\\to B$ between two sets $A$, $B$ equipped with the same structure such that, if $\\cdot$ is an operation of the structure (supposed here, for simplification, to be a binary operation), then
$$\\begin{equation}f(x\\cdot y)=f(x)\\cdot f(y)\\end{equation}$$
for every pair $x$, $y$ of element of $A$. One says often that $f$ preserves the operation or is compatible with the operation.

Formally, a map $f:A\\to B$ preserves an operation $\\mu$ of arity $\\mathsf{k}$, defined on both $A$ and $B$ if 
$$\\begin{equation}f(\\mu_A(a_1,\\ldots,a_k))=\\mu_B(f(a_1),\\ldots,f(a_k))\\end{equation}$$
,for all elements $a_1,\\ldots,a_k$ in $A$.
`
console.log(MarkdownIt().use(MarkdownItMathJaX3, { tex: {tags: 'ams'}, loader: {load: "output/chtml" }}).render(md))

