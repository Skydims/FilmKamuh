import { Card, Col, Container, Row, Image } from "react-bootstrap"
import avataraang from "../Asset/Image/TRENDING/Avatar.jpg"
import beekeeper from "../Asset/Image/TRENDING/beekeeper.jpg"
import jumanji from "../Asset/Image/TRENDING/jumanji.jpg"
import lift2 from "../Asset/Image/TRENDING/lift.jpg"
import quiet2 from "../Asset/Image/TRENDING/quiet.jpg"
import roadhouse from "../Asset/Image/TRENDING/roadhouse.jpg"

const Trending = () => {
    return (
        <div>
            <br></br>
            <Container>
            <br></br>
            <h1 className="text-white">TRENDING MOVIES</h1>
                <Row>
                    <Col md={4} className="movieWrappper" id="trending">
                        <Card className="bg-dark movieImage">
                            <Image src={avataraang} alt="Tatakae" className="imagaes"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" class="stretched-link"></a>
                                <Card.Title className="text-center">Avatar The Last Airbender</Card.Title>
                                <Card.Text className="text-left">
                                     Aang, bocah lelaki 12 tahun, harus mengesampingkan masa kecilnya demi mencegah kekacauan akibat ulah Bangsa Api. Ia pun berjuang untuk mengembalikan harmoni antara Bangsa Air, Bumi dan Angin.
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrappper">
                        <Card className="bg-dark movieImage">
                            <Image src={beekeeper} alt="Tatakae" className="imagaes"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" class="stretched-link"></a>
                                <Card.Title className="text-center">The Beekeeper</Card.Title>
                                <Card.Text className="text-left">
                                Adam Clay (Jason Statham) adalah seorang mantan personel organisasi rahasia yang bernama The Beekeeper yang ingin membalas dendan karena kerabatnya meninggal secara misterius.
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrappper">
                        <Card className="bg-dark movieImage">
                            <Image src={jumanji} alt="Tatakae" className="imagaes"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" class="stretched-link"></a>
                                <Card.Title className="text-center">Jumanji: Welcome To the Jungle</Card.Title>
                                <Card.Text className="text-left">
                                Empat anak sekolah menengah menemukan sebuah konsol video game tua dan ditarik ke dalam setting hutan permainan, yang secara harfiah menjadi avatar dewasa yang mereka pilih. Apa yang mereka temukan adalah bahwa Anda tidak hanya bermain Jumanji - Anda harus bisa bertahan.
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrappper">
                        <Card className="bg-dark movieImage">
                            <Image src={lift2} alt="Tatakae" className="imagaes"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" class="stretched-link"></a>
                                <Card.Title className="text-center">Lift</Card.Title>
                                <Card.Text className="text-left">
                                Sekelompok penjahat ahli yang dipimpin oleh Cyrus Whitaker (Kevin Hart) yang direkrut untuk melakukan keahlian mereka mencuri emas senilai US$ 500 juta dari sebuah pesawat penumpang.
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrappper">
                        <Card className="bg-dark movieImage">
                            <Image src={quiet2} alt="Tatakae" className="imagaes"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" class="stretched-link"></a>
                                <Card.Title className="text-center">A Quiet Place</Card.Title>
                                <Card.Text className="text-left">
                                    Sebuah keluarga hidup dalam ketakutan. Mereka berusaha harus hidup dalam keheningan agar terhindar dari mahluk misterius.
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrappper">
                        <Card className="bg-dark movieImage">
                            <Image src={roadhouse} alt="Tatakae" className="imagaes"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" class="stretched-link"></a>
                                <Card.Title className="text-center">Road House</Card.Title>
                                <Card.Text className="text-left">
                                Mantan petarung UFC yang mengambil pekerjaan sebagai penjaga di roadhouse Florida Keys, namun malah terjebak dalam konflik dengan organisasi kriminal lokal. 
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>

                </Row>
            </Container>

        </div>
    )
}

export default Trending
