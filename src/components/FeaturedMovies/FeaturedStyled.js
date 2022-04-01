import styled from "styled-components";

export const FeaturedStyled = styled.div`
  padding-bottom: 15rem;
  font-size: 3rem;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-image: linear-gradient(to top, #111 10%, transparent 90%),
    linear-gradient(to right, #111 10%, transparent 80%),
    url(${(props) => props.imgUrl});
  display: flex;
  justify-content: center;
  padding-left: 3rem;
  flex-direction: column;

  .featured {
    &__name {
      font-size: 6rem;
      font-weight: bold;
    }

    &__info {
      font-size: 1.8rem;
      font-weight: bold;
      margin-top: 1.5rem;
      display: inline-block;
    }

    &__year,
    &__seasons {
      font-size: 1.8rem;
      display: inline-block;
      margin-right: 1.5rem;
    }

    &__description {
      margin-top: 1.5rem;
      font-size: 2rem;
      color: #fff;
      max-width: 40%;
    }

    &__buttons {
      &--watch,
      &--info {
        margin-top: 1.5rem;
        display: inline-block;
        font-size: 2rem;
        padding: 1.5rem 2.5rem;
        border-radius: 0.5rem;
        margin-right: 1rem;
        opacity: 1;
        transition: all ease 0.2;
        cursor: pointer;
      }

      &--watch:hover,
      &--info:hover {
        opacity: 0.7;
      }

      &--watch {
        background-color: #fff;
        color: #000;
      }
      &--info {
        background-color: #333;
        color: #fff;
      }
    }

    &__genres {
      margin-top: 1.5rem;
      color: #fff;
      display: flex;

      p {
        margin: 1rem;
        font-size: 2rem;
      }

      span {
        margin: 1rem;
        font-size: 2rem;
        color: #999;
      }
    }
  }
`;
